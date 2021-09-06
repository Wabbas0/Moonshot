import React from "react";
import { Card, Row, Col, Select, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadLaunches, launchesSelector } from "../redux/modules/launches";

export type Filters = null | { agency?: string; status?: string };

const LaunchFilters = ({
  setFilters,
  filters,
}: {
  setFilters: (filters: Filters) => void;
  filters: Filters;
}) : JSX.Element => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const launches = useSelector(launchesSelector);

  const dispatch = useDispatch();

  const agencies: Array<string> = [];

  launches.data.forEach((lan) => {
    if (agencies.includes(lan.launch_service_provider.name)) {
      return "";
    }
    return agencies.push(lan.launch_service_provider.name);
  });

  return (
    <Row style={{ marginBottom: 48 }}>
      <Col span={24}>
        <Card
          style={{
            borderRadius: 5,
            background: "white",
            boxShadow: "0px 3px 5px rgb(0,0,0, 25%)",
            border: "1px dotted #001529",
          }}
        >
          <RangePicker
            style={{ margin: "0 10px" }}
            onChange={(dateRange) => {
              if (
                dateRange !== null &&
                dateRange[0] !== null &&
                dateRange[1] !== null
              ) {
                dispatch(
                  loadLaunches(
                    dateRange[0].toISOString(),
                    dateRange[1].toISOString(),
                    0
                  )
                );
                setFilters(null);
              }
            }}
          />

          <Select
            value={filters ? filters.agency : undefined}
            placeholder="Select Agency"
            style={{ width: 160, margin: "0 10px" }}
            onChange={(val) => {
              if (typeof val === "string") {
                setFilters({ ...filters, agency: val });
              }
            }}
          >
            {agencies.map((ag, i) => {
              return (
                <Option key={ag + i} value={ag}>
                  {ag}
                </Option>
              );
            })}
          </Select>

          <Select
            value={filters ? filters.status : undefined}
            placeholder="Select status"
            style={{ width: 160, margin: "0 10px" }}
            onChange={(val) => {
              if (typeof val === "string") {
                setFilters({ ...filters, status: val });
              }
            }}
          >
            <Option value={"Success"}>Successful</Option>
            <Option value={"Failure"}>Failed </Option>
          </Select>
        </Card>
      </Col>
    </Row>
  );
};

export default LaunchFilters;
